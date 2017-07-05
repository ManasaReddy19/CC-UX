/**
 * Created by 502578412 on 2/24/2016.
 */
$( function () {

    $( "#dashboard" ).hover(
        function() {
            $( this ).html( '<img src="icons/Icon-A-1-1.png" alt="dashboard" class="img-responsive center-it"/>' );
        }, function() {
            $( this ).html( '<img src="icons/Icon-A-1-2.png" alt="dashboard" class="img-responsive center-it"/>' );
        }
    );

    $( "#dashboard" ).click( function() {
        window.location.href = "app.html#/dashboard";
    });

    $( "#activities" ).hover(
        function() {
            $( this ).html( '<img src="icons/Icon-A-2-1.png" alt="activities" class="img-responsive center-it"/>' );
        }, function() {
            $( this ).html( '<img src="icons/Icon-A-2-2.png" alt="activities" class="img-responsive center-it"/>' );
        }
    );

    $( "#activities" ).click( function() {
        // window.location.href = "app.html#/activities";
    });

    $( "#applications" ).hover(
        function() {
            $( this ).html( '<img src="icons/Icon-A-3-1.png" alt="applications" class="img-responsive center-it"/>' );
        }, function() {
            $( this ).html( '<img src="icons/Icon-A-3-2.png" alt="applications" class="img-responsive center-it"/>' );
        }
    );

    $( "#applications" ).click( function() {
        window.location.href = "app.html#/applications";
    });

    $( "#server" ).hover(
        function() {
            $( this ).html( '<img src="icons/Icon-A-4-1.png" alt="server" class="img-responsive center-it"/>' );
        }, function() {
            $( this ).html( '<img src="icons/Icon-A-4-2.png" alt="server" class="img-responsive center-it"/>' );
        }
    );

    $( "#server" ).click( function() {
        window.location.href = "app.html#/environment";
    });

    $( "#profile" ).hover(
        function() {
            $( this ).html( '<img src="icons/Icon-A-5-1.png" alt="profile" class="img-responsive center-it"/>' );
        }, function() {
            $( this ).html( '<img src="icons/Icon-A-5-2.png" alt="profile" class="img-responsive center-it"/>' );
        }
    );

    $( "#profile" ).click( function() {
        // window.location.href = "app.html#/profile";
    });


    $( "#settings" ).hover(
        function() {
            $( this ).html( '<img src="icons/Icon-A-6-1.png" alt="settings" class="img-responsive center-it"/>' );
        }, function() {
            $( this ).html( '<img src="icons/Icon-A-6-2.png" alt="settings" class="img-responsive center-it"/>' );
        }
    );

    $( "#settings" ).click( function() {
        // window.location.href = "app.html#/settings";
    });
});
