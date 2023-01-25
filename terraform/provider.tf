###############
## PROVIDERS ##
###############

provider "azurerm" {
alias           = "professional"
subscription_id = var.SUBSCRIPTION_ID

features {}
}

provider "azurerm" {
features {}
}