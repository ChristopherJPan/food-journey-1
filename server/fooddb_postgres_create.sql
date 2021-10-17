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
  "recipe_id" bigint,
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


ALTER TABLE public.recipes ADD CONSTRAINT "recipes_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");

ALTER TABLE public.likes ADD CONSTRAINT "likes_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");
ALTER TABLE public.likes ADD CONSTRAINT "likes_fk1" FOREIGN KEY ("recipe_id") REFERENCES public.recipes("_id");

ALTER TABLE public.ingredients ADD CONSTRAINT "ingredients_fk0" FOREIGN KEY ("recipe_id") REFERENCES public.recipes("_id");

ALTER TABLE public.makings ADD CONSTRAINT "makings_fk0" FOREIGN KEY ("recipe_id") REFERENCES public.recipes("_id");
ALTER TABLE public.makings ADD CONSTRAINT "makings_fk1" FOREIGN KEY ("ingredient_id") REFERENCES public.ingredients("_id");




INSERT INTO public.users VALUES (1, 'Crys', 'Lim', 'clim', 'password123', 'myemail@gmail.com');

INSERT INTO public.ingredients VALUES (1, 'Bun', NULL);
INSERT INTO public.ingredients VALUES (2, 'Patty', 2);
INSERT INTO public.ingredients VALUES (3, 'Lettuce', NULL);
INSERT INTO public.ingredients VALUES (4, 'American Cheese', NULL);
INSERT INTO public.ingredients VALUES (5, 'raw Beef meat', NULL);
INSERT INTO public.ingredients VALUES (6, 'salt', NULL);

INSERT INTO public.recipes VALUES (1, 'double cheeseburger', 1, '1. get ingredients\n 2. put it together');
INSERT INTO public.recipes VALUES (2, 'Patty', 1, 'mixed in the meat and salt then grill');

INSERT INTO public.makings VALUES (1, 1, 1, 1, 'item');
INSERT INTO public.makings VALUES (2, 1, 2, 2, 'item');
INSERT INTO public.makings VALUES (3, 1, 3, 1, 'item');
INSERT INTO public.makings VALUES (4, 1, 4, 1, 'slice');

INSERT INTO public.makings VALUES (5, 2, 5, 10, 'grams');
INSERT INTO public.makings VALUES (6, 2, 6, 1, 'tablespoon');

INSERT INTO public.likes VALUES (1, 1, 1);


select setval('public.users__id_seq', 2, false);
select setval('public.ingredients__id_seq', 7, false);
select setval('public.recipes__id_seq', 3, false);
select setval('public.makings__id_seq', 7, false);
select setval('public.likes__id_seq', 2, false);
