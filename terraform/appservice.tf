####################
# App Service Plan #
####################

resource "azurerm_service_plan" "cafekopp_asp" {
name                = var.service-plan["name"]
resource_group_name = azurerm_resource_group.dev_web_cafekopp2.name
location            = azurerm_resource_group.dev_web_cafekopp.location
os_type             = var.service-plan["os_type"]
sku_name            = var.service-plan["sku_name"]
tags                = var.dev-tags
}

###############
# App Service #
###############

resource "azurerm_linux_web_app" "cafekopp_as" {
name                = var.app-service["name"]
resource_group_name = azurerm_resource_group.dev_web_cafekopp2.name
location            = azurerm_service_plan.cafekopp_asp.location
service_plan_id     = azurerm_service_plan.cafekopp_asp.id

site_config {

application_stack {
node_version = "16-lts"
}
}
}

###############
# GitHub Repo #
###############

resource "azurerm_app_service_source_control" "cafekopp_svc" {
app_id                 = azurerm_linux_web_app.cafekopp_as.id
repo_url               = "https://github.com/steffaloff/cafekopp"
branch                 = "main"
use_manual_integration = false
use_mercurial          = false

github_action_configuration {
code_configuration {
runtime_stack   = "node"
runtime_version = "16-lts"
}
}
}