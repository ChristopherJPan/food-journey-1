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

CREATE TABLE public.users (
  "_id" bigserial NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "user_name" varchar NOT NULL,
  "password" varchar NOT NULL,
  "email" varchar NOT NULL,
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.recipes (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "user_id" bigint NOT NULL,
  "directions" varchar NOT NULL,
  CONSTRAINT "recipes_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE public.likes (
  "_id" bigserial NOT NULL,
  "user_id" bigint NOT NULL,
  "recipe_id" int NOT NULL,
  CONSTRAINT "likes_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.ingredients (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "recipe_id" bigint NULL,
  CONSTRAINT "ingredients_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.makings(
  "_id" serial NOT NULL,
  "recipe_id" int NOT NULL,
  "ingredient_id" int NOT NULL,
  "quantity" int NOT NULL,
  "units" varchar NOT NULL,
  CONSTRAINT "makings_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE public.recipe ADD CONSTRAINT "recipe_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");

ALTER TABLE public.likes ADD CONSTRAINT "likes_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");
ALTER TABLE public.likes ADD CONSTRAINT "likes_fk1" FOREIGN KEY ("recipe_id") REFERENCES public.recipes("_id");
