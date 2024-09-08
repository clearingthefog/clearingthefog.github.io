$(document).ready(function(){

    $("button.playerselector.headtohead").click(function() {
        let new_pid = this.id;
        var selected1 = $("button.playerselector.headtohead.selected1");
        var selected2 = $("button.playerselector.headtohead.selected2");

        // if it's already selected, pass
        if (new_pid === selected2.attr('id')) {
            return;
        };

        // timeout loading indicator
        $(".loading-indicator").text("loading...")
        setTimeout(function() {
            $(".loading-indicator").text("")
        }, 500); 

        // drop 1st selected, mv 2nd to 1st selected
        selected1.removeClass("selected1");
        selected1 = selected2.removeClass("selected2").addClass("selected1");
        // get new selection
        selected2 = $("button.playerselector.headtohead#" + new_pid).addClass("selected2");

        let id1, id2;
        if (selected1.attr('id') < selected2.attr('id')) {
            idstr = selected1.attr('id') + "_" + selected2.attr('id');
            id1 = selected1.attr('id');
            id2 = selected2.attr('id');
        } else {
            id1 = selected2.attr('id');
            id2 = selected1.attr('id');
        }
        let id_both = id1 + "_" + id2

        var url = "/pages/generated/figures_iframesrc/head_to_head/" + id_both + ".html";
        updateIFrame("headtohead", url);
        var url = "/pages/generated/figures_iframesrc/permutation_comparison/" + id_both + ".html";
        updateIFrame("permutationcomparison", url);
        var url = "/pages/generated/figures_iframesrc/value_breakdown/" + id1 + ".html";
        updateIFrame("valuebreakdown1", url);
        var url = "/pages/generated/figures_iframesrc/value_breakdown/" + id2 + ".html";
        updateIFrame("valuebreakdown2", url);

        setURLParam("pid1", selected1.attr('id'));
        setURLParam("pid2", selected2.attr('id'));
    });

    // read selected players from url
    id1 = getURLParam("pid1");
    id2 = getURLParam("pid2");

    if (id1 === null) { 
        // change oldest-changed player
        $("button.playerselector.headtohead.selected1").trigger('click');
    } else {
        $("button.playerselector#"+id1).trigger('click');
    }

    if (id2 === null) { 
        // newer player became oldest, so change selected1 again
        $("button.playerselector.headtohead.selected1").trigger('click');
    } else {
        $("button.playerselector#"+id2).trigger('click');
    }


});

