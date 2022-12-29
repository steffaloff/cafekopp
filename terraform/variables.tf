#############
# VARIABLES #
#############

#Dryrun #1

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
