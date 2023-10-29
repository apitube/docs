ENV = "prod"

update:
	@- pm2 delete ecosystem.config.js --only="$(ENV):apitube:docs:serve"
	@- make install

install:
	@- git fetch --all
	@- git reset --hard origin/master
	@- git pull
	@- npm i
	@- npm run build
	@- pm2 restart ecosystem.config.js --only="$(ENV):apitube:docs:serve"
	@- pm2 save
