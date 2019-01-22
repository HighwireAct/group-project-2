DROP DATABASE IF EXISTS quiz_db;
CREATE DATABASE quiz_db;
USE quiz_db;

SELECT *FROM Questions;
SELECT *FROM Topics;
SELECT *FROM Tests;


SELECT *FROM Questions INNER JOIN Tests ON Questions.TestId = Tests.id   JOIN Topics ON Tests.TopicId = Topics.id;