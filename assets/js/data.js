const data = [
  {
    name: "Name 1",
    position: "Position 1",
    salary: "Salary 1",
    office: "Office 1",
    start_date: "Start Date 1",
    extn: "Extn 1",
  },
  {
    name: "Name 2",
    position: "Position 2",
    salary: "Salary 2",
    office: "Office 2",
    start_date: "Start Date 2",
    extn: "Extn 2",
  },
  {
    name: "Name 3",
    position: "Position 3",
    salary: "Salary 3",
    office: "Office 3",
    start_date: "Start Date 3",
    extn: "Extn 3",
  },
  {
    name: "Name 4",
    position: "Position 4",
    salary: "Salary 4",
    office: "Office 4",
    start_date: "Start Date 4",
    extn: "Extn 4",
  },
];
$("#datatable").DataTable({
  data: data,
  columns: [
    { data: "name" },
    { data: "position" },
    { data: "salary" },
    { data: "office" },
    { data: "start_date" },
    { data: "extn" },
  ],
  // processing: false,
  // serverSide: true,
  responsive: true,
  mark: true,
  lengthMenu: [
    [10, 25, 50, 100, 2000, -1],
    ["10 rows", "25 rows", "50 rows", "100 rows", "2000 rows", "All"],
  ],
  language: {
    paginate: {
      previous: '<i class="fa fa-circle-left"></i>',
      next: '<i class="fa fa-circle-right"></i>',
    },
    url: "../localisation/my_MM.json",
  },
});
