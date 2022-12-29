#################
## DATA SOURCE ##
#################
data "azuread_client_config" "current" {
}

data "azurerm_subscription" "professional" {
provider = azurerm.professional
}

###################
# RESOURCE GROUPS #
###################
# resource "azurerm_resource_group" "dev_atlas" {
#   provider = azurerm.professional
#   name     = "${var.prefix}-atlas"
#   location = var.default-location
#   tags     = var.dev-tags
# }

resource "azurerm_resource_group" "dev_web_cafekopp2" {
provider = azurerm.professional
name     = "${var.prefix}-web-cafekopp2"
location = var.default-location
tags     = var.dev-tags
}

# resource "azurerm_resource_group" "dev_web_test" {
# provider = azurerm.professional
# name     = "${var.prefix}-web-test"
# location = var.default-location
# tags     = var.dev-tags
# }