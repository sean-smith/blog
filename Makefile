# To deploy the website, setup your keys:
#
# 	sudo pip install awscli
# 	aws configure
#
# Then run:
# 	make deploy

clean:
	-rm -rf _site

build:
	jekyll build --config config.yml

deploy: build
	aws s3 sync _site s3://blog.seanssmith.com\
		--exclude ".git/*"\
		--exclude ".gitignore"\
		--exclude "Makefile"\
		--exclude "*.DS_Store"\
		--delete
test:
	jekyll serve --config config.yml

