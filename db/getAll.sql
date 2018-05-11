SELECT * from info_table WHERE status='active';


-- select t.name from info_table as it
-- join info_tags as ita on it.id = ita.info_id
-- join tags_table as t on t.id = ita.tag_id
-- where t.id = 1