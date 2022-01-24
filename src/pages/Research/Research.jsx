import React from "react";
import PageLayout from "@Components/PageLayout";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  List,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "@emotion/react";
import { NotificationContext } from "../context/NotificationContext";

function ActionAreaCard({ research, setResearchers }) {
  const { addNotification } = React.useContext(NotificationContext);

  const apply = (id) => {
    setResearchers((prevState) => {
      const research = prevState.find((research) => research.id === id);
      research.applied = true;
      return JSON.parse(JSON.stringify(prevState));
    });
    addNotification({
      creator: research.researcher,
      time: "a minute ago",
      title: `You have applied to join "${research.name}" research!`,
      read: false,
      url: "",
    });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "0.3s",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <CardActionArea>
        {/* <StyledChip label="closed" size="small"></StyledChip> */}
        <CardMedia
          component="img"
          height="150"
          image={research.imageUrl}
          alt="clinic"
        />
        <CardContent sx={{ height: "100%" }}>
          <Chip label={research.category} />
          {/* <Typography gutterBottom>{research.category}</Typography> */}
          <Typography gutterBottom variant="body1" component="div">
            {research.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {research.researcher}
          </Typography>
          <div style={{ padding: "10px 0 10px 0", float: "right" }}>
            <Button>View</Button>
            {research.applied ? (
              <Button disabled>Applied</Button>
            ) : (
              <Button onClick={() => apply(research.id)}>Apply</Button>
            )}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const Research = () => {
  const md = `0rem 0.25rem 0.375rem -0.0625rem rgb(0 0 0 / 10%), 0rem 0.125rem 0.25rem -0.0625rem rgb(0 0 0 / 6%)`;
  const mockResearches = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Leukaemia",
      name: `Molecular Profiling & Risk Treatment Stratification of Acute Promyelocytic Leukaemia`,
      researcher: "Ermi Neiza binti Mohd Sahid",
      applied: false,
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1581091007718-0c50d599bfd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      category: "Leukaemia",
      name: `Induced leukaemia cells from peripheral blood B cells`,
      researcher: "Maha Abdullah",
      applied: false,
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1562789233-495f52b583dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      category: "Cancer",
      name: `Identification of tumor cell-intrinsic immune modulators in pancreatic cancer cells`,
      researcher: "Gan Li Lian",
      applied: false,
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Cancer",
      name: `Cancer Therapeutics Program - Development of Metal Based Complexes as Anti-Cancer Agents`,
      researcher: "",
      applied: false,
    },
  ];
  const [researches, setResearchers] = React.useState(mockResearches);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up("xs"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  var slides = 5;

  if (isXl) {
    slides = 5.2;
  } else if (isLg) {
    slides = 4.2;
  } else if (isMd) {
    slides = 3.2;
  } else if (isSm) {
    slides = 2.2;
  } else if (isXs) {
    slides = 1.2;
  }
  return (
    <PageLayout>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Available Researches
      </Typography>
      <Swiper
        spaceBetween={20}
        slidesPerView={slides}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {researches.map((research) => (
          <SwiperSlide>
            <ActionAreaCard
              research={research}
              setResearchers={setResearchers}
            ></ActionAreaCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: "0.75rem",
          boxShadow: md,
          padding: 0,
        }}
      >
        {/* {list.map((item, idx) => {
          const { title, date, reason, accessorName } = item;
          return (
            <>
              <MDListItem
                title={title}
                date={date}
                reason={reason}
                accessorName={accessorName}
              />
              {idx !== list.length - 1 && <Divider />}
            </>
          );
        })} */}
      </List>
      <div style={{ height: "500px" }}></div>
    </PageLayout>
  );
};

export default Research;
