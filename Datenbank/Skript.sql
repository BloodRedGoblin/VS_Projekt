-- Lösch funktion, falls benötigt 
--drop table sitzplan cascade constraints purge;

-- Create Tabel
CREATE TABLE sitzplan (
    sitzplan_id   INTEGER PRIMARY KEY NOT NULL,
    freieplaetze  CHAR(1)
);

-- Dummy Daten, 15 Plätze, angepasst an Frontend
-- values( ID, status ) 
insert into sitzplan values(1,0);
insert into sitzplan values(2,0);
insert into sitzplan values(3,0);
insert into sitzplan values(4,0);
insert into sitzplan values(5,0);
insert into sitzplan values(6,1);
insert into sitzplan values(7,0);
insert into sitzplan values(8,0);
insert into sitzplan values(9,0);
insert into sitzplan values(10,0);
insert into sitzplan values(11,1);
insert into sitzplan values(12,0);
insert into sitzplan values(13,0);
insert into sitzplan values(14,1);
insert into sitzplan values(15,1);

