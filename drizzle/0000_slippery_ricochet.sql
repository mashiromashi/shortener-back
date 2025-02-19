CREATE TABLE "link" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"url" text NOT NULL,
	"short_code" text NOT NULL,
	"ttl" timestamp,
	CONSTRAINT "link_short_code_unique" UNIQUE("short_code")
);
