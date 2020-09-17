insert into users 
(username, password, user_height ,user_weight)
values 
($1,$2,$3,$4)
returning *