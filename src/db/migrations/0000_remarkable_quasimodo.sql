CREATE TYPE "public"."visibility" AS ENUM('public', 'private');--> statement-breakpoint
CREATE TYPE "public"."learning_mode" AS ENUM('front-to-back', 'back-to-front');--> statement-breakpoint
CREATE TYPE "public"."roles" AS ENUM('user', 'premium', 'admin');--> statement-breakpoint
CREATE TYPE "public"."theme" AS ENUM('dark', 'light', 'system');--> statement-breakpoint
CREATE TABLE "cards" (
	"id" varchar PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"lesson_id" varchar NOT NULL,
	"front_id" integer NOT NULL,
	"back_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "card_face" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" text,
	"example" text,
	"synonyms" varchar[],
	"antonyms" varchar[]
);
--> statement-breakpoint
CREATE TABLE "lessons" (
	"id" varchar PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"title" varchar NOT NULL,
	"description" text,
	"visibility" "visibility" DEFAULT 'public',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lesson_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"lesson_id" varchar NOT NULL,
	"tag" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"role" "roles" DEFAULT 'user'
);
--> statement-breakpoint
CREATE TABLE "user_bookmarks" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"lesson_id" varchar NOT NULL,
	"favorite" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "user_entries" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"card_id" varchar NOT NULL,
	"lesson_id" varchar NOT NULL,
	"total_tries" integer DEFAULT 0,
	"total_successful" integer DEFAULT 0,
	"is_last_try_successful" boolean,
	"last_date" timestamp
);
--> statement-breakpoint
CREATE TABLE "user_preferences" (
	"user_id" varchar PRIMARY KEY NOT NULL,
	"theme" "theme" DEFAULT 'system',
	"learning_mode" "learning_mode" DEFAULT 'front-to-back',
	"flashcards_per_lesson" integer DEFAULT 15
);
--> statement-breakpoint
ALTER TABLE "cards" ADD CONSTRAINT "cards_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cards" ADD CONSTRAINT "cards_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cards" ADD CONSTRAINT "cards_front_id_card_face_id_fk" FOREIGN KEY ("front_id") REFERENCES "public"."card_face"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cards" ADD CONSTRAINT "cards_back_id_card_face_id_fk" FOREIGN KEY ("back_id") REFERENCES "public"."card_face"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lesson_tags" ADD CONSTRAINT "lesson_tags_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_bookmarks" ADD CONSTRAINT "user_bookmarks_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_entries" ADD CONSTRAINT "user_entries_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;