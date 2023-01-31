####################
# App Service Plan #
####################

resource "azurerm_service_plan" "cafekopp_asp" {
  name                = var.service-plan["name"]
  resource_group_name = azurerm_resource_group.dev_web_cafekopp2.name
  location            = azurerm_resource_group.dev_web_cafekopp2.location
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
  app_settings = {
    "FACEBOOK_ID"     = var.FACEBOOK_ID
    "FACEBOOK_SECRET" = var.FACEBOOK_SECRET
    "GITHUB_ID"       = var.NEXT_GITHUB_ID
    "GITHUB_SECRET"   = var.NEXT_GITHUB_SECRET
    "NEXTAUTH_SECRET" = var.NEXTAUTH_SECRET
    "NEXTAUTH_URL"    = var.NEXTAUTH_URL
  }

  sticky_settings {
    app_setting_names = [
      "FACEBOOK_ID",
      "FACEBOOK_SECRET",
      "GITHUB_ID",
      "GITHUB_SECRET",
      "NEXTAUTH_SECRET",
      "NEXTAUTH_URL",
    ]
    #connection_string_names = []
  }
  identity {
    type = "SystemAssigned"
  }
}

######################
# Service Connection #
######################
resource "azurerm_app_service_connection" "cafekopp_sc_storage" {
  name               = "cafekopp-storage-account"
  app_service_id     = azurerm_linux_web_app.cafekopp_as.id
  target_resource_id = azurerm_storage_account.cafekopp2_storage.id
  authentication {
    type = "systemAssignedIdentity"
  }
}

###############
# GitHub Repo #
###############

/*
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
}*/
