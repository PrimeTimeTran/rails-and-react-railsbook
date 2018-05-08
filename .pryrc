# frozen_string_literal: true

# Pry.commands.alias_command 'c', 'continue'
# Pry.commands.alias_command 's', 'step'
# Pry.commands.alias_command 'n', 'next'
# Pry.commands.alias_command 'f', 'finish'
# Pry.commands.alias_command 'w', 'whereami'

# Pry::Commands.command /^$/, 'repeat last command' do
#   _pry_.run_command Pry.history.to_a.last
# end

puts "\n\n\n\n\n Pry is loading!"
puts "\n\n\n\n\n"

begin
  require 'awesome_print'
rescue LoadError => err
  puts "no awesome_print :("
end

begin

Pry.commands.alias_command 'c', 'continue'
Pry.commands.alias_command 's', 'step'
Pry.commands.alias_command 'n', 'next'
Pry.commands.alias_command 'wai', 'whereami'

rescue LoadError => err
	puts err
end

Pry::Commands.command /^$/, "repeat last command" do
  _pry_.run_command Pry.history.to_a.last
end