
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE TYPE "public"."lost_and_found_state" AS ENUM (
    'NONE',
    'DELIVERING',
    'RETRIEVING'
);

ALTER TYPE "public"."lost_and_found_state" OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."drawers" (
    "id" integer NOT NULL,
    "locker_id" "uuid" NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."drawers" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."drawers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."drawers_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."drawers_id_seq" OWNED BY "public"."drawers"."id";

CREATE TABLE IF NOT EXISTS "public"."lockers" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "name" character varying(32) NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."lockers" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."lost_items" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "image_urls" "text"[] NOT NULL,
    "drawer_id" integer NOT NULL,
    "reporter_id" "uuid" NOT NULL,
    "owner_id" "uuid",
    "reported_at" timestamp without time zone DEFAULT "now"() NOT NULL,
    "delivered_at" timestamp without time zone,
    "retrieved_at" timestamp without time zone
);

ALTER TABLE "public"."lost_items" OWNER TO "postgres";

CREATE SEQUENCE IF NOT EXISTS "public"."lost_items_drawer_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE "public"."lost_items_drawer_id_seq" OWNER TO "postgres";

ALTER SEQUENCE "public"."lost_items_drawer_id_seq" OWNED BY "public"."lost_items"."drawer_id";

CREATE TABLE IF NOT EXISTS "public"."users" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "auth_id" "text" NOT NULL,
    "fingerprint_id" "text",
    "lost_and_found_state" "public"."lost_and_found_state" DEFAULT 'NONE'::"public"."lost_and_found_state" NOT NULL,
    "created_at" timestamp without time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."users" OWNER TO "postgres";

ALTER TABLE ONLY "public"."drawers" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."drawers_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."lost_items" ALTER COLUMN "drawer_id" SET DEFAULT "nextval"('"public"."lost_items_drawer_id_seq"'::"regclass");

ALTER TABLE ONLY "public"."drawers"
    ADD CONSTRAINT "drawers_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."lockers"
    ADD CONSTRAINT "lockers_name_unique" UNIQUE ("name");

ALTER TABLE ONLY "public"."lockers"
    ADD CONSTRAINT "lockers_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."lost_items"
    ADD CONSTRAINT "lost_items_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_auth_id_unique" UNIQUE ("auth_id");

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_fingerprint_id_unique" UNIQUE ("fingerprint_id");

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."drawers"
    ADD CONSTRAINT "drawers_locker_id_lockers_id_fk" FOREIGN KEY ("locker_id") REFERENCES "public"."lockers"("id");

ALTER TABLE ONLY "public"."lost_items"
    ADD CONSTRAINT "lost_items_drawer_id_drawers_id_fk" FOREIGN KEY ("drawer_id") REFERENCES "public"."drawers"("id");

ALTER TABLE ONLY "public"."lost_items"
    ADD CONSTRAINT "lost_items_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id");

ALTER TABLE ONLY "public"."lost_items"
    ADD CONSTRAINT "lost_items_reporter_id_users_id_fk" FOREIGN KEY ("reporter_id") REFERENCES "public"."users"("id");

ALTER TABLE "public"."drawers" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."lockers" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."lost_items" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."users" ENABLE ROW LEVEL SECURITY;

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."drawers" TO "anon";
GRANT ALL ON TABLE "public"."drawers" TO "authenticated";
GRANT ALL ON TABLE "public"."drawers" TO "service_role";

GRANT ALL ON SEQUENCE "public"."drawers_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."drawers_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."drawers_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."lockers" TO "anon";
GRANT ALL ON TABLE "public"."lockers" TO "authenticated";
GRANT ALL ON TABLE "public"."lockers" TO "service_role";

GRANT ALL ON TABLE "public"."lost_items" TO "anon";
GRANT ALL ON TABLE "public"."lost_items" TO "authenticated";
GRANT ALL ON TABLE "public"."lost_items" TO "service_role";

GRANT ALL ON SEQUENCE "public"."lost_items_drawer_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."lost_items_drawer_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."lost_items_drawer_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."users" TO "anon";
GRANT ALL ON TABLE "public"."users" TO "authenticated";
GRANT ALL ON TABLE "public"."users" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
