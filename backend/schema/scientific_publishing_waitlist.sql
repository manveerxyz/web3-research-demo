CREATE TABLE scientific_publishing_waitlist (
	email VARCHAR PRIMARY KEY,
	created TIMESTAMPTZ DEFAULT NOW()
);
