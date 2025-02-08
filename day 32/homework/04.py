from turtle import *

def draw_square(x_cor, y_cor):
    penup()
    goto(x_cor, y_cor)
    pendown()

    for i in range(4):
        left(90)
        forward(200)

right(90)
draw_square(100, 100)
draw_square(-300, 100)
draw_square(-300, -300)
draw_square(100, -300)

exitonclick()