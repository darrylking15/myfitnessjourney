insert into users 
(username, password, user_pic , user_height ,user_weight)
values 
($1,$2,$3,$4,$5)
returning *