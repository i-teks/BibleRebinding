<?php

// Enqueue child theme style.css
add_action( 'wp_enqueue_scripts', function() {
  if ( is_rtl() ) {
    wp_enqueue_style( 'mylisting-rtl', get_template_directory_uri() . '/rtl.css', [], wp_get_theme()->get('Version') );
  }
// 11/24/2018 - DISABLED DEFAULT wp_enqueue_style FOR child-style ADDED A DIFFERENT METHOD
    //wp_enqueue_style( 'child-style', get_stylesheet_uri() );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array(), '1.0');
}, 500 );

// Happy Coding :)




// Customize WooCommerce "My Account" Menu
add_filter ( 'woocommerce_account_menu_items', 'my_account_menu_order', 999 );
function my_account_menu_order() {
  $menuOrder = array(
    'dashboard'     => __( 'Dashboard', 'woocommerce' ),
    'my-store'      => __( 'My Store', 'woocommerce' ),
    'my-listings'   => __( 'My Listings', 'woocommerce' ),
    'promotions'    => __( 'Promotions', 'woocommerce' ),
    'orders'        => __( 'Membership Billing', 'woocommerce' ),
    'edit-address'  => __( 'Addresses', 'woocommerce' ),
    'edit-account'  => __( 'Edit Account', 'woocommerce' ),
    'customer-logout'  => __( 'Logout', 'woocommerce' )
  );
  return $menuOrder;
}




/**
 * Exclude products from a particular category on the shop page
 */
function custom_pre_get_posts_query( $q ) {

    $tax_query = (array) $q->get( 'tax_query' );

    $tax_query[] = array(
           'taxonomy' => 'product_cat',
           'field' => 'slug',
           'terms' => array( 'Listing Pricing Plans', '' ), // Don't display products in the clothing category on the shop page.
           'operator' => 'NOT IN'
    );


    $q->set( 'tax_query', $tax_query );

}
add_action( 'woocommerce_product_query', 'custom_pre_get_posts_query', 1999 );
