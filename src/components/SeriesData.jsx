const sData = [
    {
      sname : "Money Heist",
      imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRsu-CXBe-GsWVWukb691Df5SD41PyIjfbd9k8HEvBPH5hAMWmr-JAgDCX4TuUz8_BJAlMQWuj9oFmWI89riQpFBC8VZ.jpg?r=d06",
      title: "Netflix Original Series",
      link: "https://www.netflix.com/in/title/80192098"
    },

    {
        sname : "Squid Game",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABatgPtRVUORKNZIeOM4y1h-685xH5NKNywtgZAQDSwAY_beMorNEUl5IQiDD-S53LmdwBY6Zcx0uDzQ9nN4U__nm52in.jpg?r=ad1",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81040344"
      },

      {
        sname : "Cobra Kai",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX_JZrakq29GQEPIZJG0dFb6C_5HmuiiWMqEEh1f4tbW1lbZ73bBf5m_13WrKgIlg9WfmP8qKSqU2KXywbOXlqVriFQt.jpg?r=e36",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81002370"
      },

      {
        sname : "Lost in Space",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcGcBHUHYC5rlS9Ex9Bbre_57Yf5KpjX4q5EgSoX7_4Frz81aBvh76ClfDBtXleWFeBs3uSqjX7MuSUrnJyzTi7EYU0l.jpg?r=f10",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80104198"
      },

      {
        sname : "Lucifer",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeRQJPklsGAjm3LvmHDOat4hfvozjflOD9GSDxvLNE10yw9eB6YhAuFiTtbNxJbWh1ogOs3WmN6FtH4F8Ii5pIQSjjQv.jpg?r=e8f",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80057918"
      },

      {
        sname : "Marvel's Daredevil",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVd8flsWvOa5z-h9CxJc5Y7-RezD3dGrMjwvdvpyKMANhvI0N2ww_mriwey71J_Ii9OsZKDaUGm1qspFcLecxmZQlr6u.jpg?r=d6a",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80018294"
      },

      {
        sname : "Stranger Things",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSoEEFwl0i4fmFQmSDQOZ_OrshmrVV7tbLEw9X7mLRBtmyyJ5Hkw1Fda2WG-AqIBQ6hEF4sqUEnT_VLeBCpVRcAhiwm-.jpg?r=a42",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80057281"
      },

      {
        sname : "Decoupled",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXsoMhADMB4tX7V3SIUIm6bxs76Ab2kwR4UdaYSkm-UGLu2_6QtIMgUweZGghgIVft6xz-bgZ4EpeKXx3r08SdTXE0CY.jpg?r=099",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81181080"
      },

      {
        sname : "Emily in Paris",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQmh1we9cOw0pCoyxTwMoA9tNTmHVB4_FDMe5kUpjfpVeC3SSHa1m404BmxRK-LQpOs0icEAXh1Eowbm_Mb78jzFd8v_.jpg?r=7ec",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81037371"
      },

      {
        sname : "Sex Education",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSEi0cmropU2tezL-SnNeXOcVJ9EPhoKC8RzQAJc9Sq-M7OI6yhnkdZI9aCq7KXgQAF8kB4rsPLugN6Jn2qKCtX7_nbu.jpg?r=224",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80197526"
      },

      {
        sname : "Jurassic World",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTCCRCMZk_zhDrIHzbLTFWaDKmhVzqKFrqOG02A3TeCM6Pw3LggCT56hcMUZKh0SzzH8nvoF9cCtY99j4lPb-4BP9Ytm.jpg?r=ed6",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81009646"
      },

      {
        sname : "Kota Factory",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdrI-es2-_E0IS3Q3uupqlhvfbol1mM2SV5flE9rzWvc6Onv4ON4QF_WBk5ROGFp3IXbk-AH30wHeuJ8JDEXqYhNtU23.jpg?r=c59",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81249783"
      },

      {
        sname : "Locke & Key",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUWfbIiftiMwkdXoUKF_ZfVQnDhemuPrifIT10szOiKpRABwI0rRk5kvTrFkUHdmVeO6rOrpdttVmgrz1ctxoaOJE8R8.jpg?r=0ed",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80241239"
      },

      {
        sname : "Never Have I Ever",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWVXSsraBzPxryIjo8awHmMQZaQBI8ATt5FnIbxtsFHn-Q0QK8DjY7AJjwo37Nql4KQ1kCCT9WmbTD1N-GlX13x-DR9y.jpg?r=b59",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80179190"
      },

      {
        sname : "You",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZwe4VhBFXJek7wp2DWHotY_-JSofLKA0BW6_-qq_VodtZJlBVAHkzdiIR6dq8KqnNGQn98ou23x-rOBkhGGw2ABkAp-.jpg?r=090",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80211991"
      },

      {
        sname : "Vincenzo",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRwe006n5tntip8MnKY2PryCyQpG8sVenkOd0BkhdmWGW-MCaXuamumWzO_ybr21_BS_kr9viFg2_uw0DdTalZVmtGCC.jpg?r=155",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81365087"
      },

      {
        sname : "Sacred Games",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQ5SnGJRE7ve1paakvE03f1XGF9_tNwYHsvdp8uoX1iPbQxr59UnQO_oPUo5Y9X5eXVC8hLTKQ82K2T5s_kEWQf4MFit.jpg?r=26b",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80115328"
      },

      {
        sname : "13 Reasons Why",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd6x2qKLcX-_QN7hm9kiKH_YphryCj5_djfbBHQZJRCpjXc_a9vmg4DRQMvo-smPm4JU6YzA6JGoCEmSAqW2U5xpQtK0.jpg?r=725",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80117470"
      },

      {
        sname : "Delhi Crime",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQZo4DQ26bqMDkPS03nZtMvKdv7SdUEJvK6R4pPbjwfe0TpQyAPK29gcehhWn6EoWJYtAr0Ul3tFURgNeOZrwLEp5Gx9.jpg?r=a3e",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81076756"
      },

      {
        sname : "Titans",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbFyvfwNqSrWkjGUYWDlQudZT1w2dLB5ycSz8jK-Zg7zrz1ygOQ-ayYan_v1mJR0KyigVXKU7cK-yqjWzS1oLDujIx6Y.jpg?r=00a",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80218200"
      },

      {
        sname : "Ginny & Georgia",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRQT01eU05b2LlrV8KeU1ymtVOqfhPvbVQdZQQWdwHNHpQkiwMwFwlwUcVQrO9q3wFwDSL2m9F9dk0pZmkhDDf9TTmiU.jpg?r=bf6",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81025696"
      },

      {
        sname : "Elite",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW0O0LGjIau_vIsipNgN72mPMeE-ohqx05SwgO9nDv3anEOHPg3OatVKodgA2KaiLCMUXCkLFd4JJFwZUFoJzF_w26d5.jpg?r=ea6",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80200942"
      },

      {
        sname : "Queen's Gambit",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcL2iWNIx4vi4cc0PT0PTlMcuXiOrJcg0UujHyeug-6AETl6AmELWTiRI0nzrJ4MyTI-mPSFzuSnLTH63iJyJxMIVp5M.jpg?r=038",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80234304"
      },

      {
        sname : "Start Up",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfLUb2_XIRM9j3KkruvN2ReqavPsbec601nePXdyJggIn4WQPF6LYQMXBq8kM0SYNh9sPddzaC4Q97RQOu89J-Ew6GwO.jpg?r=43b",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81290293"
      },

      {
        sname : "Lupin",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfKR8O8HlQOsmiaJEsi5YTo5f39XpzMfg1vTMZFtYZ92-Kf7iRtn6_0RDf6uYGHvKoNemF_DrQhEthG0GjNfkGCAZQq5.jpg?r=038",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80994082"
      },

      {
        sname : "The UNLISTED",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZLv7RFiO3t3uJYNmtBOl0jMHrcek73tuPnR9KABL5ET7W7Phy-ukFmE4F6O31oDqaK8WaO5_kIUu5yPBGUQrFLxxrLW.jpg?r=97a",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80222326"
      },

      {
        sname : "My Name",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbQiso81ndGzqqgAGgFAzUKFZ7LkWh6R82n9Xc84E27ORMK-KifnLCK1H7PsUiemeXEYQumDwu2qjkNYcqXhxE2qcD4A.jpg?r=178",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81011211"
      },

      {
        sname : "Jamtara",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVJ-YmzOUZHZ56-1o9dVuGQEQ2a8Db7WXPQwl0eUVFYAs-5QCaaN8D7Bxyst0D2qzZi3ygXe2pX26p7lpyFFBRH13YI-.jpg?r=507",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81183491"
      },

      {
        sname : "Cursed",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUeUMx4-kxBE4QTGkBzc4P2LaU_vLLpL-SGEjEGoGh5FLrrSoReG-iziTGY3w-vwk0c7bUvem6yXzsuZc0a3n-9sVigv.jpg?r=76a",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80199393"
      },

      {
        sname : "Maid",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVdWLG5tACVDhqUVW7hlNCweD82P3qW7uZl1CKddOqP9OzY3SIA0qhxE30QrTkvzQDk0jUiMlhUjp2hyP-lS8xVsYXxs.jpg?r=45b",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81166770"
      },

      {
        sname : "Hellbound",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUe3Qo2pqXiVh-U3XM5QiJltOP4-_L4APU2i_CDlOwZnD2nmrdB80DHQrcMsi9o08MHJ-sR3scpnCRwQ9uOOZi9I6nL-.jpg?r=d0c",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81256675"
      },

      {
        sname : "FF Spy Racers",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZxHqDJIUiEjOLWWH7-Bc4SQH1uk9OH8XjMfwA7VGslFZC6x5nAnFq-rxQFW1LD_9R_cSjwizbx0Ms3O6id_8lwBMZN5.jpg?r=0f1",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80225085"
      },

      {
        sname : "Outer Banks",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXvrAbOLyB4UOOPUxwM0mueN2ZONy_4FZY6-4JMp6mVE40kC9NDc26-CaLpFMiGPXT2VclKSEjDIcYppkzhr5KtsxSId.jpg?r=8be",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80236318"
      },

      {
        sname : "The innocent",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSRCL4dRrMzmk35QcP7TpKoTv_x0YF4dGJwhxeZXK-vc3pJfGxLKO6jZrRgoSIOOMp4Hpu4SSy0m9fwNZmyFUUIYQnZv.jpg?r=481",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81036936"
      },

      {
        sname : "Feel Like Ishq",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdd4aOYb0zlDT4eFyiRjLyt9y9a0QXdZXmes3H9Pd08zb2m1J_-MVC16XQndEeNhORbQ4kJ-Salhio2YrjjixMnHFRr9.jpg?r=2ea",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81046222"
      },

      {
        sname : "Selection Day",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUJcMzbANgJ4X2SunuilRyYLxyGOB2hRXmRs5W-X8QVn-wz9_V58lo3UNBfRHR4C6QJjsIOFOhSxEoSzYo2A4jygtfDK.jpg?r=9be",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80194558"
      },

      {
        sname : "Call My Agent",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABU0npwgdHWoccJvoruoH_8u4Q5jYstRAD8zc5mgry0VqJyXwZejrtHx596i07TXHSnMDcr_kBVULBpGEMrR7yUqGBWWG.jpg?r=4b5",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/81476629"
      },

      {
        sname : "Cowboy Bebop",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXdURQ1hiusGIZOHinvp5HVC9a5JkL0H58X0cYIwA7T0cEhktJYujzG-XaM4ISs5ARIrlE7bOWQGe411xpzsXd6D3MCD.jpg?r=a8f",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80207033"
      },

      {
        sname : "Trinkets",
        imgsrc : "https://occ-0-5264-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVziJ5R3uldBqswI3rROmdm369GM_gJPwYLknwLgJUAePACRuO4kZRDbgW8LamOfQPNuIyPBA2KvhJJ630z6QecGjasp.jpg?r=2b6",
        title: "Netflix Original Series",
        link: "https://www.netflix.com/in/title/80230561"
      },

      {
        sname : "Inside Edge",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/fd79f1d7eaae3be3b980b3e3fc59a4d4ca1d5d370fd60208bc4cfedc711cc5a5._V_SX296_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/0PDN3DS1B1DWPHDVZ6MTAW1XE9/_mkw_s-dc&mrntrk=pcrid_452441516049_slid__pgrid_105713381899_pgeo_9298115_x_129940998627_ptid_dsa-932982753595"
      },

      {
        sname : "Breathe",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/79ce12852f13ecfbf17e248cd35d85a750769a02fc8115cc82948026235e95d5._V_SX402_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/Breathe/0LPIP7N3YF6AF0641BL3I71ULB"
      },

      {
        sname : "Mirzapur",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9415471efb41239332df8e1fd16a4cd47da8a23a3bd8959e7836843f6ff38824._V_SX268_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/Mirzapur/0PDOKMV9CRLOMO5EUKNCUJLG4Q"
      },

      {
        sname : "Made in Heaven",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ba12721c13b5c990d1db9f355c7558b9dc133560a4ad57f00d457404717d52a1._V_SX222_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/0JP36WERGLAJLNET3SZS9XTXJ1/?ref_=dvm_pds_gen_in_as_s_g_dsafeedn_mkw_s-dc&mrntrk=pcrid_555950233887_slid__pgrid_120279910526_pgeo_9298115_x_184996578259_ptid_dsa-1249728551206"
      },

      {
        sname : "The Family Men",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e521d32eda8f6c6cc9fbeea2551967e3bd3b3894ce0c594f1bcd1d930a551ca7._V_SX296_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/The-Family-Man/0H3DDB4KBJFNDCKKLHNRLRLVKQ"
      },

      {
        sname : "Paatal Lok",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c1f0032574aefa8c945671d8741a99f0dcfbb85c62c9d420b2cc551df1aa0739._V_SX296_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/0G9IEOHCN8KMY6COD9ILGH7IY5/?ref_=dvm_pds_gen_in_as_s_g_dsafeedn_mkw_s-dc&mrntrk=pcrid_555950233887_slid__pgrid_120279910526_pgeo_9298115_x_184996578127_ptid_dsa-1249728551206"
      },

      {
        sname : "Breath",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4fba5e8e6681232cb7a605f6696846347c34880a686c3bf07dd4f9429dbb4a19._V_SX402_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/0TRG6QSFTYWRDB885FMYJOJO9X/?ref_=dvm_pds_gen_in_as_s_g_dsafeedn_mkw_s-dc&mrntrk=pcrid_555950233887_slid__pgrid_120279910526_pgeo_9298115_x_184996578169_ptid_dsa-1249728551206"
      },

      {
        sname : "Bandish Bandits",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f7602c2272bb0849ab32066260d81fb8e018c7e20e9ba64f871864fca23a869d._V_SX402_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/0GZ3CSDRPF7ZJ8E9ORRVO8NWRS/?ref_=dvm_pds_gen_in_as_s_g_dsafeedn_mkw_s-dc&mrntrk=pcrid_555950234343_slid__pgrid_120279910526_pgeo_9298115_x_184996578082_ptid_dsa-1249728551206"
      },

      {
        sname : "Tandav",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c8e14d310d9f84916b5adf9dba4c4e6801b65805ac9738000974a88966704cea._V_SX222_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/0TIXTH4G4FJBGABFDCLUEF1OU7/?ref_=dvm_pds_gen_in_as_s_g_dsafeedn_mkw_s-dc&mrntrk=pcrid_555950233887_slid__pgrid_120279910526_pgeo_9298115_x_184996578034_ptid_dsa-1249728551206"
      },

      {
        sname : "Chacha Vidhayak",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/05bdc760092e555b76360882b16baf9cf36a05457a5c04fdff07b7a4146972b2._V_SX296_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/Chacha-Vidhayak-Hain-Humare/0I1H6YRNNKM8Z3O7OGRLLBK352"
      },


      {
        sname : "Hostel Daze",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/78bcefe7c07d4ceb1ec0ea976bbafb4d95c139b967c8d22741dfc660e881e605._V_SX296_.png",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/0RMNVF1U4KJSQJQGZ029FUN1FN/?refdvm_pds_gen_in_as_s_gt_dfeedn101&ref_=dvm_pds_gen_in_as_s_g_dsafeedn_mkw_s-dc&mrntrk=pcrid_555950233887_slid__pgrid_120279910526_pgeo_9298115_x_200352680748_ptid_dsa-1428618668055"
      },


      {
        sname : "Panchayat",
        imgsrc : "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/300e30377555eee28ed76237d3b675d2be6e5947fffa0278732dfc07b58fefd9._V_SX268_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/0KEP4A6DWRKFYQFTSU5RXHEAN2/?ref_=dvm_pds_gen_in_as_s_g_dsafeedn_mkw_s-dc&mrntrk=pcrid_555950233887_slid__pgrid_120279910526_pgeo_9298115_x_184996577992_ptid_dsa-1249728551206"
      },


      {
        sname : "The Boys",
        imgsrc : "https://m.media-amazon.com/images/G/01/pv_starlight/theboys-s2-8e73b1865817/V2/THBY_S2_Starlight_Still_ButcherShortFilm_1280x720._SX384_.jpg",
        title: "Amazon Original Series",
        link: "https://www.primevideo.com/detail/The-Boys/0KRGHGZCHKS920ZQGY5LBRF7MA"
      },

      {
        sname : "Aarya",
        imgsrc : "https://i.timesnowhindi.com/stories/Arya_2_Trailer_Release_Date.png?tr=w-1200,h-900",
        title: "Hotstar Original Series",
        link: "https://www.hotstar.com/in/tv/aarya/1260028094"
      },

      {
        sname : "Hawkeye",
        imgsrc : "https://phantom-marca.unidadeditorial.es/89756a39299b281d498a43615d60e126/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/02/16279213687240.jpg",
        title: "Hotstar Original Series",
        link: "https://www.hotstar.com/in/tv/hawkeye/1260073683"
      },

      {
        sname : "Special Ops",
        imgsrc : "https://m.media-amazon.com/images/M/MV5BMDc3Zjc4NjAtMTI2MC00YmQwLTk3MmItZTZiNWM0YmNiNmNkXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg",
        title: "Hotstar Original Series",
        link: "https://www.hotstar.com/in/tv/special-ops-15/1260071971"
      },

      {
        sname : "Hostages",
        imgsrc : "https://upload.wikimedia.org/wikipedia/en/0/02/Hostages_Hotstar_Poster.jpg",
        title: "Hotstar Original Series",
        link: "https://www.hotstar.com/in/tv/hostages/1260005113"
      },

      {
        sname : "Loki",
        imgsrc : "https://images.indianexpress.com/2021/05/loki-1200.jpg",
        title: "Hotstar Original Series",
        link: "https://www.hotstar.com/in/tv/loki/1260063451"
      },

      {
        sname : "Criminal Justice",
        imgsrc : "https://m.media-amazon.com/images/M/MV5BYjAzYWY0NDMtNjQ2Yy00ZDZmLThiMWMtZjExYTVjOTg3NGE3XkEyXkFqcGdeQXVyMTAyMTE1MDA1._V1_.jpg",
        title: "Hotstar Original Series",
        link: "https://www.hotstar.com/in/tv/criminal-justice/1260004267"
      },

      {
        sname : "The Falcon",
        imgsrc : "https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_.jpg",
        title: "Hotstar Original Series",
        link: "https://www.hotstar.com/in/tv/the-falcon-and-the-winter-soldier/1260055670"
      },

      {
        sname : "Scam 1992",
        imgsrc : "https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmQtZGFkZS00NDUyLTllMzYtOTE0ZjdlMjM1ZWU0XkEyXkFqcGdeQXVyMTAyMTE1MDA1._V1_.jpg",
        title: "Sony Original Series",
        link: "https://www.sonyliv.com/shows/scam-1992-the-harshad-mehta-story-1700000292"
      },

      {
        sname : "College Romance",
        imgsrc : "https://1.bp.blogspot.com/-q-yr9fV7KxQ/YClbDznoeyI/AAAAAAAAAC8/ODLAwA8zJO0xjDoZO731-7s6fJWSKh0ngCPcBGAYYCw/s2048/College%2BRomance%2BSeason%2B2%2BDesktop%2BWallpaper%252C%2BHD%2BBackgrounds.jpg",
        title: "Sony Original Series",
        link: "https://www.sonyliv.com/shows/college-romance-1700000667"
      },

      {
        sname : "A Simple Murder",
        imgsrc : "https://m.media-amazon.com/images/M/MV5BZmJkZjNlYWMtZTdjZi00NGU4LTk0NTAtOTJiNjdlMWUzY2FhXkEyXkFqcGdeQXVyMTI2MzgxOTAx._V1_.jpg",
        title: "Sony Original Series",
        link: "https://www.sonyliv.com/shows/a-simple-murder-1700000331"
      },

      {
        sname : "Gullak",
        imgsrc : "https://static1.tvfplay.com/cpp%2Fs3fs-public%2F2019-07%2Faspect_xl_large%2FSHOW_POSTER_16-9_0.jpg",
        title: "Sony Original Series",
        link: "https://www.sonyliv.com/shows/gullak-1700000659"
      },

      {
        sname : "Pitchers",
        imgsrc : "https://origin-staticv2.sonyliv.com/landscape_thumb/06_Pitchers_070421_Landscape_Thumb.jpg",
        title: "Sony Original Series",
        link: "https://www.sonyliv.com/shows/pitchers-1500000313"
      },

      {
        sname : "Rejctx",
        imgsrc : "https://m.media-amazon.com/images/M/MV5BNGM4OGE1NzAtMjIzOS00ZDY1LWFhNzYtMzFhZWM5OGI1ZGE3XkEyXkFqcGdeQXVyMTA4NTc3NTQx._V1_FMjpg_UX1000_.jpg",
        title: "ZEE5 Original Series",
        link: "https://www.zee5.com/web-series/details/rejctx/0-6-1903"
      },

      {
        sname : "Never kiss your BF",
        imgsrc : "https://static.toiimg.com/photo/76451522.cms",
        title: "ZEE5 Original Series",
        link: "https://www.zee5.com/web-series/details/never-kiss-your-best-friend/0-6-2356"
      },

      {
        sname : "Baarish",
        imgsrc : "https://m.media-amazon.com/images/M/MV5BNTA3ZTkzMWItMTNlMS00ZjMxLTllOGEtYmM0MWY0NGM2OTk4XkEyXkFqcGdeQXVyODI2MzM0MTM@._V1_.jpg",
        title: "ZEE5 Original Series",
        link: "https://www.zee5.com/web-series/details/baarish/0-6-2614"
      },

      {
        sname : "Asur",
        imgsrc : "https://m.media-amazon.com/images/M/MV5BYzNiYTkyZjgtODRmNC00ZTc0LWIzZDgtODYyZWIwMTNhZjhiXkEyXkFqcGdeQXVyMTE0MzY0NjE1._V1_.jpg",
        title: "Voot Original Series",
        link: "https://www.voot.com/shows/asur/121993"
      },

      {
        sname : "Punch Beat",
        imgsrc : "https://cdn.cloud.altbalaji.com/thumbnails/2021-06/1624977457080249900_73.jpg",
        title: "ALT Original Series",
        link: "https://www.altbalaji.com/show/puncch-beat-season-1/258"
      },

      {
        sname : "Bicchoo ka Khel",
        imgsrc : "https://akamaividz2.zee5.com/image/upload/w_451,h_254,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-1-444971/list/1170x658withlogo693354988.jpg",
        title: "ALT Original Series",
        link: "https://www.zee5.com/web-series/details/bicchoo-ka-khel/0-6-3064"
      },

      {
        sname : "Apharan",
        imgsrc : "https://cdn.cloud.altbalaji.com/thumbnails/2021-03/1614851250042671400_73.jpg",
        title: "ALT Original Series",
        link: "https://www.altbalaji.com/show/apharan/246"
      },

      {
        sname : "Class of 2017",
        imgsrc : "https://cdn.cloud.altbalaji.com/thumbnails/2021-03/1614854845036016800_73.jpg",
        title: "ALT Original Series",
        link: "https://www.altbalaji.com/show/class-of-2017/145"
      },

      {
        sname : "Aspirants",
        imgsrc : "https://static1.tvfplay.com/cpp%2Fs3fs-public%2F2021-06%2Faspect_large%2FAspect%2016x9%20without%20text.jpg",
        title: "TVF Original Series",
        link: "https://tvfplay.com/show/aspirants/707"
      },

      {
        sname : "Tripling",
        imgsrc : "https://static1.tvfplay.com/seasons/154/aspect_large/d520ae1e97eb2f0037f680291d1a3cae_Tripling_e05_thumbnail_WOText.jpg",
        title: "TVF Original Series",
        link: "https://tvfplay.com/show/tvf-tripling/130"
      },

      {
        sname : "Insiders",
        imgsrc : "https://static1.tvfplay.com/cpp%2Fs3fs-public%2F2019-04%2Faspect_large%2FHero_Insiders_Trailer.jpg",
        title: "TVF Original Series",
        link: "https://tvfplay.com/show/tvfs-the-insiders/599"
      },

      {
        sname : "Yeh Meri Family",
        imgsrc : "https://static1.tvfplay.com/cpp%2Fs3fs-public%2F2019-05%2Faspect_large%2FYmf_Thumbnail_Hero%201_3.jpg",
        title: "TVF Original Series",
        link: "https://tvfplay.com/show/yeh-meri-family/302"
      },

      {
        sname : "Inmates",
        imgsrc : "https://static1.tvfplay.com/seasons/244/aspect_large/48e6707b263437e754b2b1d375c4ed8a-inmates-epi5-hero-jpg",
        title: "TVF Original Series",
        link: "https://tvfplay.com/show/tvf-inmates/218"
      },

      {
        sname : "Bachelors",
        imgsrc : "https://static1.tvfplay.com/seasons/135/aspect_large/61d7a3bd40a7dcc5ad435c8d71db436c_Hero_Banner_Bach_E05.jpg",
        title: "TVF Original Series",
        link: "https://tvfplay.com/show/tvf-bachelors/112"
      },
];

export default sData;