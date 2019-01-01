.PHONY: build deps

PROJECT_NAME ?= "cwb-graphql"

GOOS := linux

build: ## Build the lambda binary
	@ GOOS=$(GOOS) go build -ldflags="-s -w" -o ./build/handler cmd/main.go
