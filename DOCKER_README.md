# Docker Setup

Simple Docker setup for running all micro-frontends together.

## Quick Start

```bash
# Build images
make build

# Start all services
make up

# View logs
make logs

# Stop all services
make down
```

## Available Commands

### Build
```bash
make build              # Build all images
make build-host         # Build specific service
make build-chef
make build-customer
make build-booking
make rebuild            # Rebuild from scratch
```

### Start/Stop
```bash
make up                 # Start all services
make up-host            # Start specific service
make up-chef
make up-customer
make up-booking

make down               # Stop all services
make down-host          # Stop specific service
make down-chef
make down-customer
make down-booking
```

### Restart
```bash
make restart            # Restart all services
make restart-host       # Restart specific service
make restart-chef
make restart-customer
make restart-booking
```

### Logs
```bash
make logs               # View all logs
make logs-host          # View specific service logs
make logs-chef
make logs-customer
make logs-booking
```

### Maintenance
```bash
make ps                 # List running containers
make clean              # Remove all Docker resources
make help               # Show all commands
```

## Service URLs

- Host App: http://localhost:8080
- Chef MFE: http://localhost:8081
- Customer MFE: http://localhost:8082
- Booking MFE: http://localhost:8083

## Common Workflows

**First time:**
```bash
make build
make up
```

**Daily development:**
```bash
make up
# Make your changes (hot reload enabled)
make logs-chef  # Check specific service logs if needed
```

**Restart after changes:**
```bash
make restart-chef
```

**Clean everything:**
```bash
make clean
make build
make up
```
