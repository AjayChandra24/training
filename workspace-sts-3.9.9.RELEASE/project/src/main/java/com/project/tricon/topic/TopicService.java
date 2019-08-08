package com.project.tricon.topic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TopicService {
	
	private List<Topic> topics = new ArrayList<>(Arrays.asList(
			new Topic( "Spring","Spring framework","spring desc" ),
			new Topic( "java","java framework","java desc" ),
			new Topic( "js","js framework","js desc" )
			));
	
	public List<Topic> getAllTopics(){
		return topics;
	}
	
	public Topic getTopic( String id ) {
		
		return topics.stream().filter(t -> t.getId().contentEquals(id)).findFirst().get();
		
	}

	public void addTopic(Topic topic) {
		topics.add(topic);
		
	}
	
}
