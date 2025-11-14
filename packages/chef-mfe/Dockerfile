FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /app

# Copy root configs
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY postcss.config.js tailwind.config.js prettier.config.js eslint.config.js ./

# Copy package.json files for workspace
COPY packages/host-app/package.json ./packages/host-app/
COPY packages/booking-mfe/package.json ./packages/booking-mfe/
COPY packages/chef-mfe/package.json ./packages/chef-mfe/
COPY packages/customer-mfe/package.json ./packages/customer-mfe/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/chef-mfe ./packages/chef-mfe

WORKDIR /app/packages/chef-mfe

EXPOSE 8081

CMD ["pnpm", "run", "dev"]
