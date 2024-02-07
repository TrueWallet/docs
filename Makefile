search:
	@docker run -it --rm --env-file=.env -e "CONFIG=$(cat algolia_config.json | jq -r tostring)" algolia/docsearch-scraper
