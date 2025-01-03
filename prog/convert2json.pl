#!/usr/bin/perl

#These color codes are taken from Sanskrit_style.css (MT/web_interface/Sanskrit_style.css)

$color{"N1"} = "#00BFFF";
$color{"N2"} = "#93DB70";
$color{"N3"} = "#40E0D0";
$color{"N4"} = "#B0E2FF";
$color{"N5"} = "#B4FFB4";
$color{"N6"} = "#87CEEB";
$color{"N7"} = "#C6E2EB";
$color{"N8"} = "#6FFFC3";
$color{"NA"} = "#FF99FF";
$color{"KP"} = "#FF1975";
$color{"CP"} = "#FFFF00";

$in = <STDIN>; # ignore the title
$in = <STDIN>; # ignore the blank line

$chaptno = $ARGV[0];
$slokano = $ARGV[1];
$sentno = $ARGV[2];

while($in = <STDIN>){
chomp($in);
if ($in =~ /./) {
@flds = split(/\t/,$in);
if($flds[2] eq "") { $flds[2] = "-";}

print  "{\n";
print "\"chpatno\": \"$chaptno\",\n";
print "\"slokano\": \"$slokano\",\n";
print "\"sentno\": \"$sentno\",\n";
$color = $color{$flds[8]};
print "\"bgcolor\": \"$color\",\n";
print "\"graph\": \"assets/graphs/${chaptno}_${slokano}_${sentno}.svg\",\n";
print "\"anvaya_no\":\"$flds[0]\",\n";
print "\"word\":\"$flds[1]\",\n";
print "\"poem\":\"$flds[2]\",\n";
print "\"sandhied_word\":\"$flds[3]\",\n";
print "\"morph_analysis\":\"$flds[4]\",\n";
print "\"morph_in_context\":\"$flds[5]\",\n";
print "\"kaaraka_sambandha\":\"$flds[6]\",\n";
print "\"possible_relations\":\"$flds[7]\",\n";
print "\"hindi_meaning\":\"$flds[9]\",\n";
print "\"english_meaning\":\"-\",\n";
print "\"samAsa\":\"-\",\n";
print "\"prayoga\":\"-\",\n";
print "\"sarvanAma\":\"-\",\n";
print "\"name_classification\":\"-\"\n";
print "},\n";
}
}
