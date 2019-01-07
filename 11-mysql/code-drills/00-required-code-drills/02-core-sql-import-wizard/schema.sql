DROP DATABASE IF EXISTS food_DB;
CREATE database food_DB;

USE food_DB;
-- create a foods_nutrition table that contains id, foodname, calories, protein, fats, carbohyrates and primary key of id 
CREATE TABLE foods_nutrition (
  -- Code Starts Here
  id INT AUTO_INCREMENT PRIMARY KEY,
  foodname VARCHAR(30),
  calories DECIMAL(8,2),
  protein DECIMAL(8,2),
  fat DECIMAL(8,2),
  carbohyrates DECIMAL(8,2)
 -- Code Ends Here
);

SELECT * FROM foods_nutrition;

-- create a food_ingredients table that contains id, foodname main_ingredients, seasoning, oils, side_dish, origin and primary key of id
CREATE TABLE food_ingredients (
  -- Code Starts Here
  id INT AUTO_INCREMENT PRIMARY KEY,
  foodname VARCHAR(30),
  main_ingredients VARCHAR(40),
  seasoning VARCHAR(40),
  oils VARCHAR(40),
  side_dish VARCHAR(40),
  origin VARCHAR(30)
  
  -- Code Ends Here
);

SELECT * FROM food_ingredients;