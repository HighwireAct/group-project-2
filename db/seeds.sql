INSERT INTO subjects (subject)
VALUES 
    ("Math"),
    ("Computing");

INSERT INTO topics (topic, SubjectId)
VALUES
    ("Early math", 1),
    ("Algebra 1", 1),
    ("Hour of Code", 2),
    ("Computer Animation", 2);

INSERT INTO subtopics (subtopic, TopicId)
VALUES
    ("Counting", 1),
    ("Solving Equations", 2),
    ("Creating Webpages", 3),
    ("Color Science", 4);

INSERT INTO tests (testname, SubtopicId, TopicId)
VALUES
    ("Counting to 10", 1, 1),
    ("Find the variable value", 2, 2),
    ("HTML basics", 3, 3),
    ("Color 101", 3, 4);

INSERT INTO questions (question, answer1, answer2, answer3, answer4, correctAnswer, TestId)
VALUES 
    ("What number comes immediately after 5?", "1", "2", "4", "6", "6", 1),
    ("What number comes immediately after 6?", "7", "8", "10", "1", "7", 1),
    ("What number comes immediately after 3?", "3", "9", "7", "4", "4", 1),
    ("What number comes immediately before 5?", "1", "2", "4", "6", "4", 1),
    ("What number comes immediately before 10?", "8", "2", "3", "9", "9", 1),
    ("Select the equation where n = 6 is the solution.", "12 = n + 5", "2n = 14", "3n - 1 = 17", "6 = n + 1", "3n - 1 = 17", 2),
    ("Select the equation where n = 1 is the solution.", "12 = n + 11", "2n = 14", "3n - 1 = 17", "6 = n + 1", "12 = n + 11", 2),
    ("Select the equation where n = 0 is the solution.", "15 = n - 5", "2n = 14", "10 - 2n = 10", "6 = n + 1", "10 - 2n = 10", 2),
    ("Select the equation where n = 4 is the solution.", "12 = n + 5", "2n = 14", "3n - 1 = 11", "6 = n + 1", "3n - 1 = 11", 2),
    ("Select the equation where n = 8 is the solution.", "12 = n + 5", "2n = 16", "3n - 1 = 17", "6 = n + 1", "2n = 16", 2),
    ("HTML _________ are defined with the <p> tags.", "pages", "positions", "paragraphs", "people", "paragraphs", 3),
    ("HTML _________ are defined with the <br> tags.", "brown fonts", "bridges", "line breaks", "indentions", "line breaks", 3),
    ("By default, which tag would produce the largest font size?.", "<h1>", "<h2>", "<h3>", "<h6>", "<h1>", 3),
    ("Which of the following start tags do NOT require a corresponding end tag? ", "<title>", "<p>", "<body>", "<br>", "<br>", 3),
    ("The <h1> element defines a _________________", "header", "headline", "high-point", "hover", "headline", 3),
    ("Which of the following is not a property of color?", "texture", "saturation", "value", "hue", "texture", 4),
    ("Which color property refers to what the actual color is in the rainbow spectrum?", "opacity", "hue", "classification", "brilliance", "hue", 4),
    ("How bright a color is relative to something else is often referred to a color's ________________", "worth", "comparison", "value", "spectrum", "value", 4),
    ("Saturation refers to the ________________ of a color.", "fullness", "power", "liquidity", "intensity", 4, 4),
    ("The color that we perceive through our sight is most influenced by _______________.", "peer pressure", "Crayola naming conventions", "art teachers", "light", "light", 4);
