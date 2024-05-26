SELECT CONCAT_WS (' ', prefix, first, last, suffix) AS title FROM names

-- use CONCAT_WS to combine all parts of title together, separated by ' '