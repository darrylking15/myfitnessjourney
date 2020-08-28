insert into users
(user_pic)
values 
($1)
returning *;