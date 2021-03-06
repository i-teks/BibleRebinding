<?php

namespace MyListing\Ext\Listing_Types\Fields;

class PasswordField extends Field {

	public function field_props() {
		$this->props['type'] = 'password';
	}

	public function render() {
		$this->getLabelField();
		$this->getKeyField();
		$this->getPlaceholderField();
		$this->getDescriptionField();
		$this->getRequiredField();
		$this->getShowInSubmitFormField();
		$this->getShowInAdminField();
	}
}