DO $$ BEGIN
 CREATE TYPE "lost_and_found_state" AS ENUM('NONE', 'DELIVERING', 'RETRIEVING');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "drawers" (
	"id" serial PRIMARY KEY NOT NULL,
	"locker_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lockers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(32) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "lockers_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lost_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image_urls" text[] NOT NULL,
	"drawer_id" serial NOT NULL,
	"reporter_id" uuid NOT NULL,
	"owner_id" uuid,
	"reported_at" timestamp DEFAULT now() NOT NULL,
	"delivered_at" timestamp,
	"retrieved_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"auth_id" uuid NOT NULL,
	"fingerprint_id" text,
	"lost_and_found_state" "lost_and_found_state" DEFAULT 'NONE' NOT NULL,
	"avatar_url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_auth_id_unique" UNIQUE("auth_id"),
	CONSTRAINT "users_fingerprint_id_unique" UNIQUE("fingerprint_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "drawers" ADD CONSTRAINT "drawers_locker_id_lockers_id_fk" FOREIGN KEY ("locker_id") REFERENCES "lockers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lost_items" ADD CONSTRAINT "lost_items_drawer_id_drawers_id_fk" FOREIGN KEY ("drawer_id") REFERENCES "drawers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lost_items" ADD CONSTRAINT "lost_items_reporter_id_users_id_fk" FOREIGN KEY ("reporter_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lost_items" ADD CONSTRAINT "lost_items_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
