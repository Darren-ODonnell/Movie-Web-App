
        function myHorrorMovies() {
            // select only this group, hiding others
            document.getElementById("Horror").style.display = "block";
            document.getElementById("Animation").style.display = "none";
            document.getElementById("Action").style.display = "none";
            document.getElementById("Adventure").style.display = "none";

            var event = document.getElementById("HorrorList").value;

            // select only one div, hiding others based on selection value
            switch (event) {
                case "0":
                    document.getElementById("It").style.display = "block";
                    document.getElementById("Get Out").style.display = "none";
                    document.getElementById("The Conjuring").style.display = "none";
                    break;
                case "1":
                    document.getElementById("It").style.display = "none";
                    document.getElementById("Get Out").style.display = "block";
                    document.getElementById("The Conjuring").style.display = "none";
                    break;
                case "2":
                    document.getElementById("It").style.display = "none";
                    document.getElementById("Get Out").style.display = "none";
                    document.getElementById("The Conjuring").style.display = "block";
                    break;
            }
            clearSelected("HorrorList");
        };

        // clear element selected so this does not effect next selection from active list
        function clearSelected(selectBlock) {
            var elements = document.getElementById(selectBlock).options
            for (var i = 0; i < elements.length; i++) {
                elements[i].selected = false;
            }
        }

        function myAdventureMovies() {
            // select only this group, hiding others
            document.getElementById("Horror").style.display = "none";
            document.getElementById("Adventure").style.display = "block";
            document.getElementById("Animation").style.display = "none";
            document.getElementById("Action").style.display = "none";

            var event = document.getElementById("AdventureList").value;

            // only allow one div to ve enabled at any one time.
            switch (event) {
                case "0":
                    document.getElementById("Harry Potter").style.display = "block";
                    document.getElementById("The Lord Of The Rings").style.display = "none";
                    document.getElementById("How To Train Your Dragon").style.display = "none";
                    break;
                case "1":
                    document.getElementById("Harry Potter").style.display = "none";
                    document.getElementById("The Lord Of The Rings").style.display = "block";
                    document.getElementById("How To Train Your Dragon").style.display = "none";
                    break;
                case "2":
                    document.getElementById("Harry Potter").style.display = "none";
                    document.getElementById("The Lord Of The Rings").style.display = "none";
                    document.getElementById("How To Train Your Dragon").style.display = "block";
                    break;
            }
            clearSelected("AdventureList");
        };

        function myAnimationMovies() {
            document.getElementById("Horror").style.display = "none";
            document.getElementById("Adventure").style.display = "none";
            document.getElementById("Animation").style.display = "block";
            document.getElementById("Action").style.display = "none";

            var event = document.getElementById("AnimationList").value;

            switch (event) {
                case "0":
                    document.getElementById("Nemo").style.display = "block";
                    document.getElementById("Monsters Inc").style.display = "none";
                    document.getElementById("Lion King").style.display = "none";
                    break;
                case "1":
                    document.getElementById("Nemo").style.display = "none";
                    document.getElementById("Monsters Inc").style.display = "block";
                    document.getElementById("Lion King").style.display = "none";
                    break;
                case "2":
                    document.getElementById("Nemo").style.display = "none";
                    document.getElementById("Monsters Inc").style.display = "none";
                    document.getElementById("Lion King").style.display = "block";
                    break;
            }
            clearSelected("AnimationList");
        };

        function myActionMovies() {
            document.getElementById("Horror").style.display = "none";
            document.getElementById("Adventure").style.display = "none";
            document.getElementById("Animation").style.display = "none";
            document.getElementById("Action").style.display = "block";

            var event = document.getElementById("ActionList").value;

            switch (event) {
                case "0":
                    document.getElementById("Taken").style.display = "block";
                    document.getElementById("Mission Impossible").style.display = "none";
                    document.getElementById("Fast And Furious").style.display = "none";
                    break;
                case "1":
                    document.getElementById("Taken").style.display = "none";
                    document.getElementById("Mission Impossible").style.display = "block";
                    document.getElementById("Fast And Furious").style.display = "none";
                    break;
                case "2":
                    document.getElementById("Taken").style.display = "none";
                    document.getElementById("Mission Impossible").style.display = "none";
                    document.getElementById("Fast And Furious").style.display = "block";
                    break;
            }
            clearSelected("ActionList");
        };
        
    