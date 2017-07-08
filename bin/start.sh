#!/bin/bash

loop() {
  for i in $(seq $1 $2)
  do
    echo $i
    sleep 2
  done 
}

loop 2 10 &
sleep 2
loop 100 120 &
sleep 2
loop 1000 1020 

wait

echo "Done" 
