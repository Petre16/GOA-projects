from turtle import *

# 1
penup()
goto(100, 100)
pendown()

forward(200)
for i in range(3):
    left(90)
    forward(200)

# 2
penup()
goto(-300, 100)
pendown()

for i in range(4):
    left(90)
    forward(200)

# 3
penup()
goto(-300, -300)
pendown()

for i in range(4):
    left(90)
    forward(200)

# 4
penup()
goto(100, -300)
pendown()

for i in range(4):
    left(90)
    forward(200)

exitonclick()