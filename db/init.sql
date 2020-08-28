create table users(
user_id serial primary key, 
username text, 
password text, 
user_pic text, 
user_height text,
user_weight text

);


create table goal (
post_id SERIAL PRIMARY KEY, 
body text, 
goal_id int REFERENCES users(user_id)



);


