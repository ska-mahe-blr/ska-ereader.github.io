#!/bin/bash

# Determine the correct folder based on the second input argument ($4)
if [[ -f "../CSV/$4.csv" ]]; then
    file_path="../CSV/$4.csv"
elif [[ -f "../TSV/$4.tsv" ]]; then
    file_path="../TSV/$4.tsv"
else
    echo "Error: $4 File not found. Please ensure the file exists in either the CSV or TSV folder."
    exit 1
fi

# Check if the file exists
if [[ ! -f $file_path ]]; then
    echo "Error: $file_path not found."
    exit 1
fi

echo "Processing file: $file_path"

# Run the Perl script to convert to JSON
perl convert2json.pl $1 $2 $3 < $file_path >> analysis.json || { echo "Error running convert2json.pl"; exit 1; }

# Generate the graph with draw_graph.pl
echo "Generating graph with draw_graph.pl"
./draw_graph.pl /usr/bin/dot . < $file_path || { echo "Error running draw_graph.pl"; exit 1; }

# Move the output files if 1.svg exists
filename=$1_$2_$3
if [ -f "1.svg" ]; then
    mv 1.dot ../assets/graphs/$filename.dot || { echo "Error moving 1.dot"; exit 1; }
    mv 1.svg ../assets/graphs/$filename.svg || { echo "Error moving 1.svg"; exit 1; }
else
    echo "Error: 1.svg not found. Check draw_graph.pl and dot command output."
    exit 1
fi

