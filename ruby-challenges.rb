# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']

# the selct method constructs a new array comntaining the elements that match the condition.
# select the items that include the conditiopn from the items and return as a new array.

letter_o = beverages_array.select {|item| item.include? ("o")}
p letter_o

letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

letter_t = beverages_array.select {|item| item.include? ("t")}
p letter_t

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

p nums_array1.sum

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

p nums_array2.sum

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

######PSEUDO#######
# I continue to struggle understanding the flow of programming languages, though I have been able to see Ruby with a little more confidence.  My process here is to create a class object that is initialized with model, number of wheels and speed. I believe i defined the current bike status but i am still not getting the expected output.

class Bike
    def initialize(model, number_of_wheels, current_speed)
        @model = model
        @number_of_wheels = number_of_wheels
        @current_speed = current_speed
    end
        "The #{@model} bike has #{@number_of_wheels} and is going #{@current_speed} mph"
end
    current_bike = Bike.new("Treck", 2, 0)
    print "The #{model} has #{number_of_wheels} and is going #{current_speed} mph."


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
