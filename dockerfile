FROM php:8.3-cli

RUN apt-get update && apt-get install -y \
unzip \
git \
curl \
libpq-dev \
libicu-dev \
&& docker-php-ext-install pdo pdo_pgsql \
&& docker-php-ext-configure intl \
&& docker-php-ext-install intl

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
apt-get install -y nodejs

RUN node -v && npm -v

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

COPY . /app

RUN composer install --no-interaction --optimize-autoloader --ignore-platform-req=ext-http

RUN npm install && npm run build

EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]

