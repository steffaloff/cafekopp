#############
# VARIABLES #
#############

#Dryrun #16
variable "SUBSCRIPTION_ID" {
  type = string
}

variable "prefix" {
  default = "dev"
}
variable "default-location" {
  default = "norwayeast"
}

variable "dev-tags" {
  default = {
    ManagedBy   = "TF"
    Environment = "Dev"
    Project     = "Cafekopp2"
  }
}

variable "service-plan" {
  type = map(string)
  default = {
    name     = "cafekopp2"
    os_type  = "Linux"
    sku_name = "B1"
  }
}

variable "app-service" {
  type = map(string)
  default = {
    name = "cafekopp2"
  }
}

variable "containerlist" {
  type = list(string)
  default = ["pasmurt", "koldtbord", "kaldesmaretter", "enklevarmretter", "tapa", "kaker", "forretter", "hovedretter", "desserter", "tjenester"]
}

########################
# App Service Settings #
########################

variable "FACEBOOK_SECRET" {
  type = string
}
variable "FACEBOOK_ID" {
  type = string
}
variable "NEXT_GITHUB_ID" {
  type = string
}
variable "NEXT_GITHUB_SECRET" {
  type = string
}
variable "NEXTAUTH_SECRET" {
  type = string
}
variable "NEXTAUTH_URL" {
  type = string
}

