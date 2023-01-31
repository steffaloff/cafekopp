###########
# BACKEND #
###########

terraform {
  backend "azurerm" {
    resource_group_name  = "cg-dev"
    storage_account_name = "cgdevsa004"
    container_name       = "terraform"
    key                  = "terraform.tfstate"
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 2.46"
    }

    azuread = {
      source  = "hashicorp/azuread"
      version = ">=1.5.0"
    }
  }
}