import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({}) => {
  const timelines = [
    {
      date: "July 2017",
      title: "Unique Group of Institutions",
      description: "I completed my college from here with 85%.",
    },
    {
      date: "Jan 2021",
      title: "Govt College University Lahore",
      description: "I did my bachelor's from here with 3.08 CGPA",
    },
    {
      date: "Feb 2021",
      title: "Harw Solutions",
      description:
        "I started my first job here as a Junior Frontend React Developer.",
    },
    {
      date: "Jan 2022 (Current)",
      title: "LEADconcept",
      description:
        "I started my new job here as a mid Level Frontend React Developer",
    },
  ];
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary">
              {item.date.toString().split("T")[0]}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
