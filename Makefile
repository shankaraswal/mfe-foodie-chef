.PHONY: help all build up down stop restart logs clean ps

help: ## Show available commands
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-20s %s\n", $$1, $$2}'

all: build up ## Build and start all services
	@echo "All services are up and running!"

# Build commands
build: ## Build all Docker images
	docker-compose build

build-host: ## Build host-app
	docker-compose build host-app

build-chef: ## Build chef-mfe
	docker-compose build chef-mfe

build-customer: ## Build customer-mfe
	docker-compose build customer-mfe

build-booking: ## Build booking-mfe
	docker-compose build booking-mfe

rebuild: ## Rebuild all from scratch (no cache)
	docker-compose build --no-cache

# Start/Stop commands
up: ## Start all services
	docker-compose up -d
	@echo "Services started!"
	@echo "Host App: http://localhost:8080"
	@echo "Chef MFE: http://localhost:8081"
	@echo "Customer MFE: http://localhost:8082"
	@echo "Booking MFE: http://localhost:8083"

up-host: ## Start host-app
	docker-compose up -d host-app

up-chef: ## Start chef-mfe
	docker-compose up -d chef-mfe

up-customer: ## Start customer-mfe
	docker-compose up -d customer-mfe

up-booking: ## Start booking-mfe
	docker-compose up -d booking-mfe

down: ## Stop and remove all services
	docker-compose down

stop: ## Stop all services (without removing)
	docker-compose stop

down-host: ## Stop host-app
	docker-compose stop host-app
	docker-compose rm -f host-app

down-chef: ## Stop chef-mfe
	docker-compose stop chef-mfe
	docker-compose rm -f chef-mfe

down-customer: ## Stop customer-mfe
	docker-compose stop customer-mfe
	docker-compose rm -f customer-mfe

down-booking: ## Stop booking-mfe
	docker-compose stop booking-mfe
	docker-compose rm -f booking-mfe

# Restart commands
restart: ## Restart all services
	docker-compose restart

restart-host: ## Restart host-app
	docker-compose restart host-app

restart-chef: ## Restart chef-mfe
	docker-compose restart chef-mfe

restart-customer: ## Restart customer-mfe
	docker-compose restart customer-mfe

restart-booking: ## Restart booking-mfe
	docker-compose restart booking-mfe

# Logs
logs: ## View logs from all services
	docker-compose logs -f

logs-host: ## View logs from host-app
	docker-compose logs -f host-app

logs-chef: ## View logs from chef-mfe
	docker-compose logs -f chef-mfe

logs-customer: ## View logs from customer-mfe
	docker-compose logs -f customer-mfe

logs-booking: ## View logs from booking-mfe
	docker-compose logs -f booking-mfe

# Maintenance
ps: ## List running containers
	docker-compose ps

clean: ## Remove all containers, images, and volumes
	docker-compose down -v --rmi all
