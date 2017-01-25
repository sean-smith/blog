
deploy:
	aws s3 sync ../blog s3://blog.seanssmith.com 
		--exclude ".git/*" \
		--exclude "Makefile" \
		--delete

