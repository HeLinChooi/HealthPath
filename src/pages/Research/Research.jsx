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

function ActionAreaCard({ research }) {
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
            <Button>Apply</Button>
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
      imageUrl:
        "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Cancer",
      name: `Cancer Therapeutics Program - Development of Metal Based Complexes as Anti-Cancer Agents`,
      researcher: "",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Leukaemia",
      name: `Molecular Profiling & Risk Treatment Stratification of Acute Promyelocytic Leukaemia`,
      researcher: "Ermi Neiza binti Mohd Sahid",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1562789233-495f52b583dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      category: "Cancer",
      name: `Identification of tumor cell-intrinsic immune modulators in pancreatic cancer cells`,
      researcher: "Gan Li Lian",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1581091007718-0c50d599bfd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      category: "Leukaemia",
      name: `Induced leukaemia cells from peripheral blood B cells`,
      researcher: "Maha Abdullah",
    },
  ];
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
      <div style={{ padding: "30px" }}>
        <Typography variant="h2">Available Researches</Typography>
        <Swiper
          spaceBetween={20}
          slidesPerView={slides}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {mockResearches.map((research) => (
            <SwiperSlide>
              <ActionAreaCard research={research}></ActionAreaCard>
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
      </div>
      <div style={{ height: "500px" }}></div>
    </PageLayout>
  );
};

export default Research;
