from turtle import*

#we wantto paint a house

#step 1:  draw a square
#speed(10)
width(6)
color("blue")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door

forward(100)
left(90)
color("green")
begin_fill()
forward(120)     #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

color("blue")
left(30)
forward(145)
left(90)
color("light blue")
goto(15, 75)
begin_fill()
forward(55)
left(90)
forward(55)
left(90)
forward(55)
end_fill()


exitonclick()