import { Text, Timeline } from '@mantine/core';

import { AnnotationIcon } from '@heroicons/react/solid';

export default function CustomTimeLine() {


  const data = [
    {
      label: "Submission of Full-length Manuscript(opens from)",
      date: "15 June 2022"
    },
    {
      label: "Last date to submit Full-length Manuscript",
      date: "18 July 2022"
    },
    {
      label: "Notification of Acceptance",
      date: "20 August 2022 - 7 September 2022"
    },
    {
      label: "Early Bird Registration",
      date: "16 August 2022-15 September 2022"
    },
    {
      label: "Submission of Camera-ready Manuscript",
      date: "5 October 2022"
    },
    {
      label: "Last Date for Registration",
      date: "20 November 2022"
    },
    {
      label: "Pre-Conference Tutorial",
      date: "21 December 2022"
    },
    {
      label: "Conference Dates",
      date: "21-23 December 2022"
    }
  ]



  return (
    <>
      <h1 className="my-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent underline">
        Important Dates
      </h1>
      <Timeline active={1} bulletSize={24} lineWidth={3} >
        {data.map((item, index) => (
          <Timeline.Item key={index} bullet={<AnnotationIcon />} title={item.label}>
            <Text size="md" mt={4}>{item.date}</Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}