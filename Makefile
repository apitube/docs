ENV = "prod"

update:
	@- make install

install:
	@- git fetch --all
	@- git reset --hard origin/master
	@- git pull
	@- npm i
	@- npm run build
